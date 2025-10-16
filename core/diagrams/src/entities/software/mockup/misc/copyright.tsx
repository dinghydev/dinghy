import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COPYRIGHT = {
  _style: {
    entity:
      'strokeColor=#999999;verticalLabelPosition=bottom;shadow=0;dashed=0;verticalAlign=top;strokeWidth=2;html=1;shape=mxgraph.mockup.misc.copyrightIcon;',
  },
  _original_width: 25,
  _original_height: 25,
}

export function Copyright(props: DiagramNodeProps) {
  return (
    <Shape {...COPYRIGHT} {...props} _style={extendStyle(COPYRIGHT, props)} />
  )
}
