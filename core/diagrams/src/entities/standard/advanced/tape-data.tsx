import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAPE_DATA = {
  _style: {
    entity: 'shape=tapeData;whiteSpace=wrap;html=1;perimeter=ellipsePerimeter;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function TapeData(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TAPE_DATA)} />
}
