const o = {
	// unfortunally we cannot change this
	autoFocus: true,
}

const quack = 'duck'

const test = [
	<video {...o} />,
	<div aria-hidden={'true'} />,
	<div aria-hidden="" />,
	<div aria-hidden="0" />,
	<div aria-hidden="1" />,
	<div aria-hidden="false" />,
	<div aria-hidden="False" />,
	<div aria-hidden="true" />,
	<div aria-hidden={'false'} />,
	<div aria-hidden={'true'} />,
	<div aria-hidden={() => {}} />,
	<div aria-hidden={0} />,
	<div aria-hidden={1} />,
	<div aria-hidden={6} />,
	<div aria-hidden={'false'} />,
	<div aria-hidden={function () {}} />,
	<div aria-hidden={quack ? 'true' : 'false'} />,
	<div aria-hidden={quack ? 'true' : 'true'} />,
	<div aria-hidden={quack ? 'false' : 'false'} />,
	<div aria-hidden={quack ? 'true' : 'true'} />,
	<div aria-hidden={quack ? 'false' : 'false'} />,
	<div aria-hidden={quack ?? 'true'} />,
	<div aria-hidden={quack ?? 'false'} />,
	<div aria-hidden={quack ?? 'true'} />,
	<div aria-hidden={quack ?? 'false'} />,
	<div aria-hidden={quack || 'true'} />,
	<div aria-hidden={quack || 'true'} />,
	<div aria-hidden={quack || 'false'} />,
	<div aria-hidden={quack || 'false'} />,
	<div aria-hidden={quack && 'true'} />,
	<div aria-hidden={quack && 'true'} />,
	<div aria-hidden={quack && 'false'} />,
	<div aria-hidden={quack && 'false'} />,
	<div aria-hidden={quack.quack} />,
	<div aria-hidden={quack} />,
	<div aria-hidden={signal()} />,
	<div aria-hidden={'true'} />,
	<div aria-hidden={undefined} />,
	<div aria-hidden={null} />,
	<div aria-hidden={void 0} />,
	<div autofocus />,
	<div autofocus={true} />,
	<div autofocus={true} />,
	<div autofocus={true} />,
	<div autofocus={false} />,
	<div autofocus={true} />,
	<div autofocus={false} />,
	<div autofocus={true} />,
	<div autofocus={() => {}} />,
	<div autofocus={false} />,
	<div autofocus={true} />,
	<div autofocus={true} />,
	<div autofocus={false} />,
	<div autofocus={function () {}} />,
	<div autofocus={quack ? true : true} />,
	<div autofocus={quack ? false : false} />,
	<div autofocus={quack ? true : true} />,
	<div autofocus={quack ? false : false} />,
	<div autofocus={quack ?? true} />,
	<div autofocus={quack ?? false} />,
	<div autofocus={quack ?? true} />,
	<div autofocus={quack ?? false} />,
	<div autofocus={quack || true} />,
	<div autofocus={quack || true} />,
	<div autofocus={quack || false} />,
	<div autofocus={quack || false} />,
	<div autofocus={quack && true} />,
	<div autofocus={quack && true} />,
	<div autofocus={quack && false} />,
	<div autofocus={quack && false} />,
	<div autofocus={quack.quack} />,
	<div autofocus={quack} />,
	<div autofocus={signal()} />,
	<div autofocus={true} />,
	<div autofocus={undefined} />,
	<div autofocus={null} />,
	<div autofocus={void 0} />,
	<video
		disableremoteplayback={true}
		playsinline={false}
		somethingMadeUp={false}
	></video>,
	<my-el do-not-warn />,
	<div dowarnme />,
	<div onClick={() => {}} />,
	<form attr:onsubmit="return false;" />,
	<form attr:onsubmit={'return false;'} />,
	<form attr:onsubmit={true && 'return false;'} />,
	<form attr:onsubmit="return false;" />,
	<form attr:onsubmit={'return false;'} />,
	<form onsubmit={e => {}} />,
	<form onsubmit={function (e) {}} />,
	<form onsubmit={true && 'return false;'} />,
	<form onsubmit={true && 'return false;'} />,
]
