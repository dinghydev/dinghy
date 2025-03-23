import type { DependsPair, DrawioContext, DrawioNodeTree } from '../types.js'
import { DependencyFieldsSchema, DependsSchema } from '../types.js'
import { absLeft, absTop } from '../utils.js'

const listContainsAllItem = (list: DependsPair[], item: DependsPair) =>
  list.some((m) => item.all.every((d) => m.all.includes(d)))

function findRelationship(
  context: DrawioContext,
  node1: DrawioNodeTree,
  node2: DrawioNodeTree,
) {
  const relationship = context.dependencies.find((d) => {
    return (
      (d._props as any)._source === node1 && (d._props as any)._target === node2 ||
      (d._props as any)._target === node1 && (d._props as any)._source === node2
    )
  })
  if (!relationship) {
    throw new Error(
      `Relationship not found between ${node1._props._title} and ${node2._props._title}`,
    )
  }
  return relationship
}

function collectPairs(context: DrawioContext, node: DrawioNodeTree) {
  DependsSchema.options.map((key: string) => {
    const depends = node[key as keyof DrawioNodeTree]
    if (depends) {
      const groups = (depends as any).reduce(
        (acc: { [key: string]: DrawioNodeTree[] }, d: DrawioNodeTree) => {
          const relationship = findRelationship(context, node, d)
          const key: string = `${
            d._parent!._props._id
          }-${relationship._props._diagram.flags.arrowDirection}`
          // biome-ignore lint/suspicious/noAssignInExpressions: todo
          const groupList = (acc[key] =
            (acc[key] as DrawioNodeTree[]) ||
            ([] as DrawioNodeTree[])) as unknown as DrawioNodeTree[][]
          groupList.push([d, relationship])
          return acc
        },
        {} as { [key: string]: DrawioNodeTree[] },
      )
      Object.values(groups).map((value) => {
        const group = value as unknown as [DrawioNodeTree, DrawioNodeTree][]
        const list = group.map((d) => d[0])
        const relationships = group.map((d) => d[1])
        const all = [node, ...list]
        const dependsPair = {
          single: node,
          list,
          all,
          relationships,
        }
        context.dependsPairs.push(dependsPair)
      })
    }

    // const splits = all.map((d) => d._props._title)
    // let dependsPair = { single: node, list, all, relationships: [] }
    // if (!listContainsAllItem(context.dependsPairs, dependsPair)) {
    //   list.map((d) => {
    //     dependsPair.relationships.push(findRelationship(context, node, d))
    //   })
    //   context.dependsPairs.push(dependsPair)
    // }
  })
  node._children.map((c: DrawioNodeTree) => collectPairs(context, c))
}

const collectParents = (
  { _parent }: DrawioNodeTree,
  result: DrawioNodeTree[] = [],
) => {
  if (_parent) {
    result.push(_parent)
    collectParents(_parent, result)
  }
  return result
}

const findCommonParent = (node1: DrawioNodeTree, node2: DrawioNodeTree) => {
  const ancestor1 = collectParents(node1)
  const ancestor2 = collectParents(node2)
  const commonAncestor = ancestor1.filter((value) => ancestor2.includes(value))
  return commonAncestor[0]
}

const populateAbs = (context: DrawioContext) => {
  context.dependencies.map((d) => {
    DependencyFieldsSchema.options.map((key: string) => {
      const selected = (d._props as any)[key]
      if (!selected._props._diagram.state.absBottom) {
        selected._props._diagram.state.absLeft = absLeft(selected)
        selected._props._diagram.state.absRight =
          selected._props._diagram.state.absLeft +
          selected._props._diagram.state.width
        selected._props._diagram.state.absCenterX =
          selected._props._diagram.state.absLeft +
          selected._props._diagram.state.width / 2

        selected._props._diagram.state.absTop = absTop(selected)
        selected._props._diagram.state.absBottom =
          selected._props._diagram.state.absTop +
          selected._props._diagram.state.height
        selected._props._diagram.state.absCenterY =
          selected._props._diagram.state.absTop +
          selected._props._diagram.state.height / 2
      }
    })
  })
}

const populateDirection = (context: DrawioContext) => {
  context.dependencies.map((d) => {
    const commonParent = findCommonParent((d._props as any)._source, (d._props as any)._target)
    let direction: string
    let isArrowVertical = false
    if ((commonParent._props as any)._diagram.flags.isDirectionVertical) {
      direction =
        (d._props as any)._source._props._diagram.state.absTop >
        (d._props as any)._target._props._diagram.state.absTop
          ? 'up'
          : 'down'
      isArrowVertical = true
    } else {
      direction =
        (d._props as any)._source._props._diagram.state.absLeft >
        (d._props as any)._target._props._diagram.state.absLeft
          ? 'left'
          : 'right'
    }
    ;(d._props as any)._diagram.flags ??= {}
    ;(d._props as any)._diagram.flags.arrowDirection = direction
    ;(d._props as any)._diagram.flags.isArrowVertical = isArrowVertical
  })
}

const collectUniqePairs = (context: DrawioContext) => {
  const uniquPairs: DependsPair[] = []
  context.dependsPairs.map((dependsPair) => {
    listContainsAllItem(uniquPairs, dependsPair) || uniquPairs.push(dependsPair)
  })
  context.dependsPairs = uniquPairs
}

const sortArray = (context: DrawioContext) => {
  context.dependsPairs.map((dependsPair) => {
    if (dependsPair.list.length > 1) {
      const originalList = [...dependsPair.list]
      const originalRelationships = [...dependsPair.relationships]
      const isVertical =
        dependsPair.relationships[0]._props._diagram.flags.isArrowVertical
      dependsPair.list.sort((a, b) =>
        isVertical
          ? (a._props as any)._diagram.state.absLeft - (b._props as any)._diagram.state.absLeft
          : (a._props as any)._diagram.state.absTop - (b._props as any)._diagram.state.absTop,
      )
      dependsPair.relationships = []
      dependsPair.list.map((d) => {
        const index = originalList.indexOf(d)
        dependsPair.relationships.push(originalRelationships[index])
      })
    }
  })
}

export const p61CollectDependencies = (context: DrawioContext) => {
  populateAbs(context)
  populateDirection(context)
  collectPairs(context, context.rootNode)
  context.dependsPairs.sort((a, b) => b.list.length - a.list.length)
  collectUniqePairs(context)
  sortArray(context)
}
