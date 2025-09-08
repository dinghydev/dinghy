import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETWORK = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.application;appType=network',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Network(props: DiagramNodeProps) {
  return <Shape {...NETWORK} {...props} _style={extendStyle(NETWORK, props)} />
}
