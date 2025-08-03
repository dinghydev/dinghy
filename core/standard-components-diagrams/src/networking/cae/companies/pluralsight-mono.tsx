import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PLURALSIGHT_MONO = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/PluralSight_mono.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function PluralsightMono(props: DiagramNodeProps) {
  return <Shape {...PLURALSIGHT_MONO} {...props} />
}
