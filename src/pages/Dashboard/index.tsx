/* eslint-disable react/jsx-curly-newline */
import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import { FaCircle, FaPlayCircle, FaRedoAlt } from 'react-icons/fa';

import ArrayBlock from '../../components/ArrayBlock';
import Sidebar from '../../components/Sidebar';
import SidebarButton from '../../components/SidebarButton';

import {
  Container,
  Content,
  AlgoVisualizer,
  AlgoTitle,
  AlgoContent,
  AlgoProperties,
  InputRange,
  SideMenu,
} from './styles';

function shuffle(size: number): number[] {
  const newArray = Array.from(Array(size).keys());
  let currentIndex = newArray.length;
  let temporaryValue: number;

  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
}

function heapify(unSortedArray: number[], n: number, i: number): number[] {
  const arr = unSortedArray;
  let largest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }

  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest !== i) {
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    return heapify(arr, n, largest);
  }

  return arr;
}

interface IQuickSortPartition {
  pi: number;
  nextStateArray: number[];
}

interface IAlgoData {
  name: string;
  type: number;
}

const Dashboard: React.FC = () => {
  let currentSpeed = 250;
  let toggleSort = false;

  const [algo, setAlgo] = useState<IAlgoData>({
    name: 'Bubble Sort',
    type: 0,
  });
  const [speed, setSpeed] = useState(currentSpeed);
  const [numericArray, setNumericArray] = useState<number[]>(shuffle(15));

  const handleResetArray = useCallback(() => {
    // eslint-disable-next-line
    toggleSort = false;
    const shuffledArray = shuffle(numericArray.length);
    setNumericArray([...shuffledArray]);
  }, [numericArray.length]);

  const handleChangeArraySize = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // eslint-disable-next-line
      toggleSort = false;
      const shuffledArray = shuffle(Number(event.target.value));
      setNumericArray([...shuffledArray]);
    },
    [],
  );

  const handleChangeSpeed = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSpeed(Number(event.target.value));
      // eslint-disable-next-line
      currentSpeed = Number(event.target.value);
    },
    [],
  );

  const handleChangeAlgo = useCallback(({ name, type }) => {
    // eslint-disable-next-line
    toggleSort = false;
    setAlgo({
      name,
      type,
    });
  }, []);

  const transitions = useTransition(
    // eslint-disable-next-line no-return-assign
    numericArray.map((number, index) => ({
      number,
      index,
    })),
    item => item.index,
    {
      from: {
        transform: 'translate3d(0,-700px,0)',
      },
      enter: ({ number, index }) => ({
        number,
        index,
        transform: 'translate3d(0,0px,0)',
      }),
      leave: {
        width: '0px',
        transform: 'translate3d(0,-700px,0)',
      },
    },
  );

  const sort = useCallback(
    async (array: number[], type: number) => {
      // eslint-disable-next-line
      toggleSort = true;

      let i = 0;
      let j = 0;
      let k = 0;

      let sortedArray = array;
      const { length } = sortedArray;

      function wait(time: number): Promise<void> {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, time);
        });
      }

      async function partition(
        unSortedArray: number[],
        low: number,
        high: number,
      ): Promise<IQuickSortPartition> {
        const arr = unSortedArray;
        const pivot = arr[high];

        let x = low - 1;

        await wait(51 - currentSpeed / 10);
        for (let y = low; y <= high - 1; y += 1) {
          if (arr[y] < pivot) {
            x += 1;
            const temp = arr[x];
            arr[x] = arr[y];
            arr[y] = temp;
          }
        }
        const temp = arr[x + 1];
        arr[x + 1] = arr[high];
        arr[high] = temp;

        setNumericArray([...arr]);

        return {
          pi: x + 1,
          nextStateArray: arr,
        };
      }

      async function quickSort(
        unsortedArray: number[],
        low: number,
        high: number,
      ): Promise<number[]> {
        if (low < high) {
          // eslint-disable-next-line prefer-const
          let { pi, nextStateArray } = await partition(
            unsortedArray,
            low,
            high,
          );

          nextStateArray = await quickSort(nextStateArray, low, pi - 1); // Before pi
          nextStateArray = await quickSort(nextStateArray, pi + 1, high); // After pi

          return nextStateArray;
        }

        return unsortedArray;
      }

      switch (type) {
        case 0: // Bubble Sort
          for (i = 0; i < length && toggleSort; i += 1) {
            for (j = 0; j < length && toggleSort; j += 1) {
              await wait(51 - currentSpeed / 10);
              if (sortedArray[j] > sortedArray[j + 1]) {
                const tmp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = tmp;
                setNumericArray([...sortedArray]);
              }
            }
          }
          break;
        case 1: // Selection Sort
          for (i = 0; i < length && toggleSort; i += 1) {
            k = i;
            for (j = i; j < length && toggleSort; j += 1) {
              await wait(51 - currentSpeed / 10);
              if (sortedArray[j] < sortedArray[k]) {
                k = j;
              }
            }

            if (i !== k) {
              const temp = sortedArray[i];
              sortedArray[i] = sortedArray[k];
              sortedArray[k] = temp;
            }

            setNumericArray([...sortedArray]);
          }
          break;
        case 2: // Insertion Sort
          for (i = 1; i < length; i += 1) {
            const current = sortedArray[i];
            j = i - 1;
            while (j > -1 && current < sortedArray[j]) {
              await wait(51 - currentSpeed / 10);
              sortedArray[j + 1] = sortedArray[j];
              j -= 1;
              setNumericArray([...sortedArray]);
            }
            sortedArray[j + 1] = current;
            setNumericArray([...sortedArray]);
          }
          break;
        case 3: // Heap Sort
          for (i = Math.floor(length / 2); i >= 0 && toggleSort; i -= 1) {
            await wait(51 - currentSpeed / 10);
            sortedArray = heapify(sortedArray, length, i);
            setNumericArray([...sortedArray]);
          }

          for (i = length - 1; i > 0 && toggleSort; i -= 1) {
            await wait(51 - currentSpeed / 10);
            const temp = sortedArray[0];
            sortedArray[0] = sortedArray[i];
            sortedArray[i] = temp;

            sortedArray = heapify(sortedArray, i, 0);
            setNumericArray([...sortedArray]);
          }
          break;
        case 4: // Quick Sort
          sortedArray = await quickSort(sortedArray, 0, length - 1);
          setNumericArray([...sortedArray]);
          break;
        case 5: // Shell Sort
          for (i = Math.floor(length / 2); i > 0; i = Math.floor(i / 2)) {
            for (j = i; j < length; j += 1) {
              const temp = sortedArray[j];

              for (k = j; k >= i && sortedArray[k - i] > temp; k -= i) {
                await wait(51 - currentSpeed / 10);
                sortedArray[k] = sortedArray[k - i];
                setNumericArray([...sortedArray]);
              }

              sortedArray[k] = temp;
              setNumericArray([...sortedArray]);
            }
          }
          break;
        default:
          break;
      }
    },
    [currentSpeed, toggleSort],
  );

  return (
    <Container>
      <Sidebar>
        <SidebarButton
          icon={FaCircle}
          onClick={() =>
            handleChangeAlgo({
              name: 'Bubble Sort',
              type: 0,
            })
          }
          isSelected={algo.type === 0}
        >
          Bubble Sort
        </SidebarButton>
        <SidebarButton
          icon={FaCircle}
          onClick={() =>
            handleChangeAlgo({
              name: 'Selection Sort',
              type: 1,
            })
          }
          isSelected={algo.type === 1}
        >
          Selection Sort
        </SidebarButton>
        <SidebarButton
          icon={FaCircle}
          onClick={() =>
            handleChangeAlgo({
              name: 'Insertion Sort',
              type: 2,
            })
          }
          isSelected={algo.type === 2}
        >
          Insertion Sort
        </SidebarButton>
        <SidebarButton
          icon={FaCircle}
          onClick={() =>
            handleChangeAlgo({
              name: 'Heap Sort',
              type: 3,
            })
          }
          isSelected={algo.type === 3}
        >
          Heap Sort
        </SidebarButton>
        <SidebarButton
          icon={FaCircle}
          onClick={() =>
            handleChangeAlgo({
              name: 'Quick Sort',
              type: 4,
            })
          }
          isSelected={algo.type === 4}
        >
          Quick Sort
        </SidebarButton>
        <SidebarButton
          icon={FaCircle}
          onClick={() =>
            handleChangeAlgo({
              name: 'Shell Sort',
              type: 5,
            })
          }
          isSelected={algo.type === 5}
        >
          Shell Sort
        </SidebarButton>
      </Sidebar>
      <Content>
        <AlgoVisualizer>
          <AlgoTitle>
            <h1>{algo.name}</h1>
          </AlgoTitle>

          <AlgoContent>
            {transitions.map(({ item, props, key }) => (
              <animated.div
                key={key}
                style={{
                  ...props,
                }}
              >
                <ArrayBlock
                  arrayNumber={item.number}
                  arraySize={numericArray.length}
                >
                  <p>{item.number}</p>
                </ArrayBlock>
              </animated.div>
            ))}
          </AlgoContent>

          <AlgoProperties>
            <div>
              <p>Tamanho</p>
              <InputRange
                type="range"
                min={5}
                max={30}
                value={numericArray.length}
                onChange={event => handleChangeArraySize(event)}
                step={1}
              />
              <strong>{numericArray.length}</strong>
            </div>

            <div>
              <p>Velocidade</p>
              <InputRange
                type="range"
                min={1}
                max={500}
                value={speed}
                onChange={event => handleChangeSpeed(event)}
                step={1}
              />
              <strong>{speed}</strong>
            </div>
          </AlgoProperties>
        </AlgoVisualizer>

        <SideMenu>
          <button type="button" onClick={handleResetArray}>
            <FaRedoAlt />
          </button>

          <button
            type="button"
            onClick={() => {
              sort(numericArray, algo.type);
            }}
          >
            <FaPlayCircle />
          </button>
        </SideMenu>
      </Content>
    </Container>
  );
};

export default Dashboard;
