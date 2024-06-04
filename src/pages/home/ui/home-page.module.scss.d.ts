export type Styles = {
	container: string;
	home: string;
	home__content: string;
	home__inner: string;
	home__input: string;
	home__title: string;
	home__todos: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
