import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORAGE = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.storage;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Storage(props: DiagramNodeProps) {
  return <Shape {...STORAGE} {...props} _style={extendStyle(STORAGE, props)} />
}
