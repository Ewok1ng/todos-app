import React from 'react';
import { Button, Radio } from 'antd';

import { clearCompletedTodos } from '@entities/todos';

import { useAppDispatch } from '@shared/lib/redux';

import styles from './controls.module.scss';

import type { CheckboxOptionType, RadioChangeEvent } from 'antd';

export interface Props {
	options: Array<CheckboxOptionType<string>>;
	activeOption: string;
	activeTodosCount: number;
	setActiveOption: (value: string) => void;
}

export const Controls = ({
	options,
	activeOption,
	setActiveOption,
	activeTodosCount
}: Props) => {
	const dispatch = useAppDispatch();

	const handleOptionChange = (e: RadioChangeEvent) => {
		setActiveOption(e.target.value);
	};

	const clearCompleted = () => {
		dispatch(clearCompletedTodos());
	};

	return (
		<div className={styles.controls}>
			<p>{activeTodosCount} items left</p>
			<Radio.Group
				options={options}
				onChange={handleOptionChange}
				value={activeOption}
				buttonStyle="outline"
				optionType="button"
				size="small"
			/>
			<Button size="small" onClick={clearCompleted}>
				Clear completed
			</Button>
		</div>
	);
};
