import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURITY_BASELINES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Security_Baselines.svg;strokeColor=none;',
  },
  _width: 44,
  _height: 50,
}

export function SecurityBaselines(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_BASELINES}
      {...props}
      _style={extendStyle(SECURITY_BASELINES, props)}
    />
  )
}
