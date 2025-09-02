import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_STORAGE = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.tape_storage;',
  },
  _original_width: 105,
  _original_height: 105,
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
