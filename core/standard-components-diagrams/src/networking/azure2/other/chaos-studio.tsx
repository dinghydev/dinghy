import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHAOS_STUDIO = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Chaos_Studio.svg;',
  _width: 68,
  _height: 68,
}

export function ChaosStudio(props: DiagramNodeProps) {
  return <Shape {...CHAOS_STUDIO} {...props} />
}
