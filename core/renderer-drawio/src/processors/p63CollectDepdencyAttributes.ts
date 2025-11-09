import { deepMerge } from '@dinghy/base-components'
import {
  DependencyFieldsSchema,
  type DrawioContext,
  type DrawioNodeTree,
} from '../types.ts'

function collectAttributes(rel: DrawioNodeTree) {
  DependencyFieldsSchema.options.map((key: string) => {
    const shape = (rel._props as any)[key]
    if (shape._props._diagram?.dependency) {
      rel._props._diagram ??= {} as any
      rel._props._diagram.dependency ??= [] as any
      deepMerge(
        rel._props._diagram.dependency,
        shape._props._diagram.dependency,
      )
    }
  })
}

export const p63CollectDependencyAttributes = (context: DrawioContext) => {
  const relationships: DrawioNodeTree[] = []
  context.dependsPairs.map((dependsPair) => {
    dependsPair.relationships.map((rel) => {
      if (!relationships.includes(rel)) {
        collectAttributes(rel)
        relationships.push(rel)
      }
    })
  })
}
