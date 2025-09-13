import type { DependsPair, DrawioContext, DrawioNodeTree } from '../types.ts'
import { DependencyFieldsSchema, DependsSchema } from '../types.ts'
import { absLeft, absTop, findCommonParent } from '../utils.ts'
import Debug from 'debug'
const debug = Debug('p61CollectDependencies')

const listContainsAllItem = (list: DependsPair[], item: DependsPair) =>
  list.some((m) => item.all.every((d) => m.all.includes(d)))

function findRelationship(
  context: DrawioContext,
  node1: DrawioNodeTree,
  node2: DrawioNodeTree,
) {
  const relationship = context.dependencies.find((d) => {
    return (
      ((d._props as any)._source === node1 &&
        (d._props as any)._target === node2) ||
      ((d._props as any)._target === node1 &&
        (d._props as any)._source === node2)
    )
  })
  if (!relationship) {
    debug(
      'Relationship not found between %s and %s',
      node1._props._title,
      node2._props._title,
    )
  }
  return relationship
}

function collectPairs(context: DrawioContext, node: DrawioNodeTree) {
  DependsSchema.options.map((key: string) => {
    const depends = node[key as keyof DrawioNodeTree]
    if (depends) {
      const containers = (depends as any).reduce(
        (acc: { [key: string]: DrawioNodeTree[] }, d: DrawioNodeTree) => {
          const relationship = findRelationship(context, node, d)
          if (!relationship) {
            return acc
          }
          const key: string = `${
            d._parent!._props._id
          }-${relationship._props._diagram.flags.arrowDirection}`
          // biome-ignore lint/suspicious/noAssignInExpressions: todo
          const containerList = (acc[key] = (acc[key] as DrawioNodeTree[]) ||
            ([] as DrawioNodeTree[])) as unknown as DrawioNodeTree[][]
          containerList.push([d, relationship])
          return acc
        },
        {} as { [key: string]: DrawioNodeTree[] },
      )
      Object.values(containers).map((value) => {
        const container = value as unknown as [DrawioNodeTree, DrawioNodeTree][]
        const list = container.map((d) => d[0])
        const relationships = container.map((d) => d[1])
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
const populateAbs = ({ dependencies }: DrawioContext) => {
  const toBeRemoved: any[] = []
  dependencies.map((d) => {
    DependencyFieldsSchema.options.map((key: string) => {
      const selected = (d._props as any)[key]
      if (!selected) {
        return
      }
      if (!selected._props._diagram.state) {
        toBeRemoved.push(d)
        return
      }
      if (!selected._props._diagram.state.absBottom) {
        selected._props._diagram.state.absLeft = absLeft(selected)
        selected._props._diagram.state.absRight =
          selected._props._diagram.state.absLeft +
          selected._props._diagram.geometry.width
        selected._props._diagram.state.absCenterX =
          (selected._props._diagram.state.absLeft +
            selected._props._diagram.state.absRight) / 2

        selected._props._diagram.state.absTop = absTop(selected)
        selected._props._diagram.state.absBottom =
          selected._props._diagram.state.absTop +
          selected._props._diagram.geometry.height
        selected._props._diagram.state.absCenterY =
          (selected._props._diagram.state.absTop +
            selected._props._diagram.state.absBottom) / 2
      }
    })
  })

  toBeRemoved.map((d) => {
    const dIndex = dependencies.indexOf(d)
    if (dIndex >= 0) {
      dependencies.splice(dIndex, 1)
    }
  })
}

const populateDirection = (context: DrawioContext) => {
  context.dependencies.map((d) => {
    if (!(d._props as any)._source) {
      return
    }
    const commonParent = findCommonParent(
      (d._props as any)._source,
      (d._props as any)._target,
    )
    let direction: string
    let isArrowVertical = false
    if ((commonParent._props as any)._diagram.flags.isDirectionVertical) {
      direction = (d._props as any)._source._props._diagram.state.absTop >
          (d._props as any)._target._props._diagram.state.absTop
        ? 'up'
        : 'down'
      isArrowVertical = true
    } else {
      direction = (d._props as any)._source._props._diagram.state.absLeft >
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
          ? (a._props as any)._diagram.state.absLeft -
            (b._props as any)._diagram.state.absLeft
          : (a._props as any)._diagram.state.absTop -
            (b._props as any)._diagram.state.absTop
      )
      dependsPair.relationships = []
      dependsPair.list.map((d) => {
        const index = originalList.indexOf(d)
        dependsPair.relationships.push(originalRelationships[index])
      })
    }
  })
}

export const p61ConsolidateDependencies = (context: DrawioContext) => {
  populateAbs(context)
  populateDirection(context)
  collectPairs(context, context.rootNode)

  //TODO: sort with ordering support, don't break list by same parent
  context.dependsPairs.sort((a, b) => b.list.length - a.list.length)

  collectUniqePairs(context)
  sortArray(context)
}
