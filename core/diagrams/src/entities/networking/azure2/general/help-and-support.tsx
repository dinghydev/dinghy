import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HELP_AND_SUPPORT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Help_and_Support.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 69,
}

export function HelpAndSupport(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HELP_AND_SUPPORT)} />
}
