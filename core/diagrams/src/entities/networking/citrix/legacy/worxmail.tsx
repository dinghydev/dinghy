import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORXMAIL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.worxmail;fillColor=#112356;gradientColor=#63AFC6;gradientDirection=south;',
  },
  _original_width: 38,
  _original_height: 38,
}

export function Worxmail(props: NodeProps) {
  return (
    <Shape {...WORXMAIL} {...props} _style={extendStyle(WORXMAIL, props)} />
  )
}
