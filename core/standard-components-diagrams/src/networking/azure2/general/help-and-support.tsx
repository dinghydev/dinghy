import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HELP_AND_SUPPORT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Help_and_Support.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 69,
}

export function HelpAndSupport(props: DiagramNodeProps) {
  return (
    <Shape
      {...HELP_AND_SUPPORT}
      {...props}
      _style={extendStyle(HELP_AND_SUPPORT, props)}
    />
  )
}
