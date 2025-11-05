import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HELP_SUPPORT = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Support_2.svg;strokeColor=none;',
  },
  _width: 32,
  _height: 50,
}

export function HelpSupport(props: NodeProps) {
  return (
    <Shape
      {...HELP_SUPPORT}
      {...props}
      _style={extendStyle(HELP_SUPPORT, props)}
    />
  )
}
