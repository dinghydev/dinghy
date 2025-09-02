import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HELP_SUPPORT = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Support_2.svg;strokeColor=none;',
  },
  _original_width: 32,
  _original_height: 50,
}

export function HelpSupport(props: DiagramNodeProps) {
  return (
    <Shape
      {...HELP_SUPPORT}
      {...props}
      _style={extendStyle(HELP_SUPPORT, props)}
    />
  )
}
