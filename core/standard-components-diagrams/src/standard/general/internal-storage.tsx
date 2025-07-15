import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERNAL_STORAGE = {
  _style: 'shape=internalStorage;whiteSpace=wrap;html=1;backgroundOutline=1;',
  _width: 80,
  _height: 80,
}

export function InternalStorage(props: DiagramNodeProps) {
  return <Shape {...INTERNAL_STORAGE} {...props} />
}
