import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SES = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ses;fillColor=#D9A741;gradientColor=none;',
  },
  _original_width: 79.5,
  _original_height: 93,
}

export function Ses(props: NodeProps) {
  return <Shape {...SES} {...props} _style={extendStyle(SES, props)} />
}
