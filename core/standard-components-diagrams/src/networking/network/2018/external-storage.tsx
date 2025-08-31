import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXTERNAL_STORAGE = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.external_storage;',
  _width: 90,
  _height: 100,
}

export function ExternalStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTERNAL_STORAGE}
      {...props}
      _style={extendStyle(EXTERNAL_STORAGE, props)}
    />
  )
}
