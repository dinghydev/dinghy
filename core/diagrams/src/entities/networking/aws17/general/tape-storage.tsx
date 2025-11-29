import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAPE_STORAGE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.tape_storage;fillColor=#7D7C7C;gradientColor=none;',
  },
  _width: 75,
  _height: 39,
}

export function TapeStorage(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TAPE_STORAGE)} />
}
