import type { DrawioContext, DrawioNodeTree } from '../types.ts'

function isViewMatch(view: string, selectedView: string) {
  if (view[0] === '!') {
    return view.slice(1) !== selectedView
  } else {
    return view === selectedView
  }
}

function isNodeVisible(node: DrawioNodeTree, selectedView: string) {
  const views = node._props._view
  if (views === undefined) {
    return selectedView === 'overview'
  } else {
    if (Array.isArray(views)) {
      return views.some((v) => isViewMatch(v, selectedView))
    } else {
      return isViewMatch(views, selectedView)
    }
  }
}

function filterView(
  node: DrawioNodeTree,
  selectedView: string,
) {
  node._children.map((c: DrawioNodeTree) => {
    if (isNodeVisible(c, selectedView)) {
      filterView(c, selectedView)
    } else {
      c._props._diagram ??= {} as any
      c._props._diagram.flags ??= {} as any
      c._props._diagram.flags.isHidden = true
    }
  })
}

function findFirstVisibleNode(
  node: DrawioNodeTree,
  selectedView: string,
): DrawioNodeTree | undefined {
  if (isNodeVisible(node, selectedView)) {
    return node
  }

  let visibleNode: DrawioNodeTree | undefined
  node._children.find((c) => {
    visibleNode = findFirstVisibleNode(c, selectedView)
    return visibleNode
  })
  return visibleNode
}

export const p22FilterView = ({
  rootNode,
  renderOptions,
}: DrawioContext) => {
  const selectedView = (renderOptions as any).view?.name
  if (selectedView !== 'all') {
    const visibleNode = findFirstVisibleNode(
      rootNode,
      selectedView,
    )
    if (visibleNode) {
      if (visibleNode !== rootNode) {
        rootNode._children = visibleNode._children
        visibleNode._children.map((child) => {
          child._parent = rootNode
        })
        rootNode._props._title = visibleNode._props._title
      }
    } else {
      rootNode._children = []
    }
    filterView(rootNode, selectedView)
  }
}
