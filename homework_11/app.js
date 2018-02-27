let rootNode = document.getElementById("root");

function renderTree(tree) {
    let el, html;
    let folderIcon = '<i class="folder material-icons">folder_open</i>';
    let fileIcon = '<i class="file material-icons">insert_drive_file</i>';

    html = '<ul>';

    for (let i in tree) {
        el = tree[i];

        if (el.folder && !el.children) {
            folderIcon = '<i class="folder material-icons">folder</i>';
        }

        if (el.folder) {
            html += '<li><span>' + folderIcon + el.title + '</span>';
        } else {
            html += '<li><span>' + fileIcon + el.title + '</span>';
        }

        if (el.children) {
            html += renderTree(el.children);
        }

        html += '</li>';
    }

    html += '</ul>';

    return html;
}


function toggleTree(el) {
    let tree = document.getElementsByTagName(el)[0];

    tree.onclick = function(event) {
        let target = event.target;
        let li = target.parentNode;
        let childrenContainer = li.getElementsByTagName(el)[0];
        let icon = li.getElementsByTagName('i')[0];

        if (!childrenContainer) {
            return;
        }

        childrenContainer.hidden = !childrenContainer.hidden;

        if (icon.innerHTML === 'folder') {
            icon.innerHTML = 'folder_open';
        } else {
            icon.innerHTML = 'folder';
        }
    }
}

let tree = document.createElement('div');
let str = renderTree(structure);
tree.innerHTML = str;
tree = tree.firstChild;

rootNode.appendChild(tree);
toggleTree('ul');