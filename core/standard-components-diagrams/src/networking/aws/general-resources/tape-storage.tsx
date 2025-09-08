import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TAPE_STORAGE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.tape_storage;',
  },
  _original_width: 78,
  _original_height: 38,
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
