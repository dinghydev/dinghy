import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLUEPRINTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Blueprints.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48,
}

export function Blueprints(props: DiagramNodeProps) {
  return (
    <Shape {...BLUEPRINTS} {...props} _style={extendStyle(BLUEPRINTS, props)} />
  )
}
