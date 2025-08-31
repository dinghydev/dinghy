import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.storage;',
  },
  _width: 60,
  _height: 60,
}

export function Storage(props: DiagramNodeProps) {
  return <Shape {...STORAGE} {...props} _style={extendStyle(STORAGE, props)} />
}
