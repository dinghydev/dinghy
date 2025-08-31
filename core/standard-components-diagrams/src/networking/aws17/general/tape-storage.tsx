import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_STORAGE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.tape_storage;fillColor=#7D7C7C;gradientColor=none;',
  },
  _width: 75,
  _height: 39,
}

export function TapeStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_STORAGE}
      {...props}
      _style={extendStyle(TAPE_STORAGE, props)}
    />
  )
}
