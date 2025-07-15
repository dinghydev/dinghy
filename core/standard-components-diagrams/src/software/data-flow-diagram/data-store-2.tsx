import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_STORE_2 = {
  _style: 'html=1;dashed=0;whiteSpace=wrap;shape=partialRectangle;right=0;',
  _width: 100,
  _height: 30,
}

export function DataStore2(props: DiagramNodeProps) {
  return <Shape {...DATA_STORE_2} {...props} />
}
