import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLUEPRINTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Blueprints.svg;strokeColor=none;',
  },
  _width: 65,
  _height: 64,
}

export function Blueprints(props: DiagramNodeProps) {
  return (
    <Shape {...BLUEPRINTS} {...props} _style={extendStyle(BLUEPRINTS, props)} />
  )
}
