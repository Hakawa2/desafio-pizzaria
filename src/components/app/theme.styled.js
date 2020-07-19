import { createGlobalStyle } from "styled-components";

export const Theme = createGlobalStyle` 

	* {
		-webkit-user-drag: none;
		outline: none;
	}

	html {
		height: 100vh;
	}

	body {
		margin: 0;
		font-family: 'Quicksand', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-height: 100%;
		background-color: #d9d9d9;
	}

	.menu-item {
		align-items: stretch !important;
		user-select: none;
		cursor: pointer;
		border: none;
	}
 	
	.scroll-menu-arrow {
		padding: 20px;
		cursor: pointer;
	}

`;
