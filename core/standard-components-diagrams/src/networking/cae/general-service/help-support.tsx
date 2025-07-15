import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HELP_SUPPORT = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Support_2.svg;',
  _width: 32,
  _height: 50,
}

export function HelpSupport(props: DiagramNodeProps) {
  return <Shape {...HELP_SUPPORT} {...props} />
}
