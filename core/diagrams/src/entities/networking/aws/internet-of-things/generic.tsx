import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERIC = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.generic;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function Generic(props: NodeProps) {
  return <Shape {...GENERIC} {...props} _style={extendStyle(GENERIC, props)} />
}
