# react-fabricjs  [![npm version](https://img.shields.io/npm/v/react-fabricjs.svg?style=flat)](https://www.npmjs.com/package/react-fabricjs) ![License BSD](http://img.shields.io/badge/license-BSD-blue.svg)
[React](http://facebook.github.io/react/) + [Fabricjs](http://fabricjs.com)

## Overview

## Quick start

### Installation
```bash
  npm install react-fabricjs --save
```

### Example
```jsx
import React from 'react';
import {Canvas,Circle, Image, Path, Text} from 'react-fabricjs';

const App = () => {
	return (
		<Canvas
			ref="canvas"
			width="1000"
			height="1000"
		>
			<Circle
				ref="circle"
				radius={20}
				left={100}
				top={50}
				stroke="green"
			/>

			<Image
				ref="image"
				imgElement={document.getElementById('my-image')}
				width={100}
				height={100}
			/>

			<Image
				src="http://i.imgur.com/jZsNUCi.jpg"
				width={300}
				height={300}
				left={0}
				top={500}
			/>


			<Path
				path="M 0 0 L 300 100 L 200 300 z"
				fill="red"
				stroke="green"
				strokeWidth={10}
				opacity={0.5}
			/>

			<Text
				text="Click me"
				left={0}
				top={200}
				shadow="rgba(0,0,0,0.3) 5px 5px 5px"
				stroke="#ff1318"
				strokeWidth={1}
				fontStyle="italic"
				fontFamily="Hoefler Text"
			/>
		</Canvas>
	);
};

```

## Initialization


## Event

## Todo
