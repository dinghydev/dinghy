import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERNAL_STORAGE = {
  _style:
    'shape=internalStorage;whiteSpace=wrap;html=1;dx=15;dy=15;rounded=1;arcSize=8;strokeWidth=2;',
  _width: 70,
  _height: 70,
}

export function InternalStorage(props: DiagramNodeProps) {
  return <Shape {...INTERNAL_STORAGE} {...props} />
}
