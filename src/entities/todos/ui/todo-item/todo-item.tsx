import { Checkbox } from 'antd';
import React from 'react';

import classNames from 'classnames';

import styles from './todo-item.module.scss';

interface Props {
	text: string;
	isActive: boolean;
	toggleIsActive: () => void;
}

export const TodoItem = ({ text, isActive, toggleIsActive }: Props) => {
	return (
		<li className={styles.item} data-testid="todo-item">
			<Checkbox checked={isActive} onChange={toggleIsActive} />
			<span className={classNames({ [styles.active]: isActive })}>{text}</span>
		</li>
	);
};
