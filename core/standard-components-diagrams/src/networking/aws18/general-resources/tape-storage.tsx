import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_STORAGE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.tape_storage;',
  _width: 60,
  _height: 60,
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
