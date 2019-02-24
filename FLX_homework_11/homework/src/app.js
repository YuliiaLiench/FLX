let rootNode = document.getElementById('root');

const handleInput = (input, callback) => {
    const button = input.querySelector('.button-add');
    const inputText = input.querySelector('.input-text');

    const disableButton = () => {
        button.classList.add('button--disabled');
    };
    const enableButton = () => {
        button.classList.remove('button--disabled');
    };
    const disableInput = () => {
        inputText.disabled = true;
    };
    
    const enableInput = () => {
        inputText.disabled = false;
    };

    const inputChange = (e) => {
        const value = inputText.value;

        if (!value) {
            disableButton();
        } else {
            enableButton();
        }
    };

    button.addEventListener('click', (e) => {
        if (button.classList.contains('button--disabled')) {
            return;
        }

        callback(inputText.value);
    }, false);

    inputText.addEventListener('keyup', inputChange, false);
    inputText.addEventListener('change', inputChange, false);
    inputText.addEventListener('cut', inputChange, false);
    inputText.addEventListener('paste', inputChange, false);
    inputText.addEventListener('blur', inputChange, false);

    return {
        disableButton,
        enableButton,
        disableInput,
        enableInput
    };
};

const getItem = (value, onDelete) => {
    const getText = (value) => {
        const text = document.createElement('div');
        const data = document.createTextNode(value);

        text.appendChild(data);
        text.classList.add('item__text');

        return text;
    };
    const getCheckbox = () => {
        const checkbox = document.createElement('div');
        const button = document.createElement('div');
        checkbox.classList.add('item__checkbox');
        button.classList.add('button', 'checkbox');

        checkbox.appendChild(button);

        button.addEventListener('click', (e) => {
            if (button.classList.contains('checkbox--checked')) {
                return;
            }
            
            const icon = document.createElement('i');
            icon.classList.add('checkbox__icon', 'material-icons');
            icon.innerText = 'done';

            button.classList.add('checkbox--checked');
            button.appendChild(icon);
        }, false);

        return checkbox;
    };
    const getDelete = (callback) => {
        const itemDelete = document.createElement('div');
        const button = document.createElement('div');
        const icon = document.createElement('i');
        
        itemDelete.classList.add('item__delete')
        button.classList.add('button');
        icon.classList.add('button__delete', 'material-icons');
        icon.innerText = 'delete';
        button.appendChild(icon);
        itemDelete.appendChild(button);

        button.addEventListener('click', callback, false);

        return itemDelete;
    };

    const item = document.createElement('div');
    item.classList.add('item');

    item.appendChild(getCheckbox());
    item.appendChild(getText(value));
    item.appendChild(getDelete(onDelete.bind(null, item)));

    return item;
};

const catToDo = (rootNode) => {
    const content = rootNode.querySelector('.content');
    const message = rootNode.querySelector('.message');

    const input = handleInput(
        rootNode.querySelector('.input-block'),
        (value) => {
            addItem(value);
        }
    );

    const deleteItem = (item, e) => {
        content.removeChild(item);

        input.enableInput();
        input.enableButton();
        message.innerText = '';
    };

    const addItem = (value) => {
        const numberList = 10;
        if (content.children.length >= numberList) {
            return;
        }

        const item = getItem(value, deleteItem);
        content.appendChild(item);

        if (content.children.length === numberList) {
            input.disableButton();
            input.disableInput();
            message.innerText = 'Maximum item per list are created';
        }
    };
};


catToDo(rootNode);