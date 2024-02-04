# Responsive Modal

A customizable and responsive modal component for React.

## Installation

Install the package using npm:

```bash
npm install responsive-modal
```

## Usage

```javascript
import React, { useState } from 'react';
import Modal from 'responsive-modal';

const App = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <div>
      <button onClick={() => setModalState(true)}>Open Modal</button>
      <Modal
        isVisible={modalState}
        onClose={() => setModalState(false)}
        width="50%"
        height="50%"
        scroll
        header={<YourHeaderComponent/>}
        wrapperClassName="custom-wrapper"
        contentClassName="custom-content"
        bodyClassName="custom-body"
      >
        <div>Modal Content Goes Here</div>
      </Modal>
    </div>
  );
};

export default App;
```

## Props

#### `children` (required)
- Type: `ReactNode`
- Description: The content to be rendered inside the modal.

#### `isVisible` (required)
- Type: `boolean`
- Description: Controls the visibility of the modal.

#### `width`
- Type: `string`
- Default: `undefined`
- Description: Specifies the width of the modal. Accepts CSS values like percentages or pixels.

#### `height`
- Type: `string`
- Default: `undefined`
- Description: Specifies the height of the modal. Accepts CSS values like percentages or pixels.

#### `onClose` (required)
- Type: `() => void`
- Description: Callback function triggered when the modal is closed.

#### `scroll`
- Type: `boolean`
- Default: `false`
- Description: Enables or disables scrolling within the modal body.

#### `header`
- Type: `React.ReactElement<{ onClose?: () => void }>`
- Default: `undefined`
- Description: React element to be used as the modal header. It can have an optional `onClose` prop.

#### `wrapperClassName`
- Type: `string`
- Default: `undefined`
- Description: Custom class name for the modal wrapper.

#### `contentClassName`
- Type: `string`
- Default: `undefined`
- Description: Custom class name for the modal content.

#### `bodyClassName`
- Type: `string`
- Default: `undefined`
- Description: Custom class name for the modal body.
