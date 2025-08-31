import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLURALSIGHT_MONO = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/PluralSight_mono.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function PluralsightMono(props: DiagramNodeProps) {
  return (
    <Shape
      {...PLURALSIGHT_MONO}
      {...props}
      _style={extendStyle(PLURALSIGHT_MONO, props)}
    />
  )
}
