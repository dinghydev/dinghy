import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FUNCTION_APPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Functions.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 46,
}

export function FunctionApps(props: DiagramNodeProps) {
  return (
    <Shape
      {...FUNCTION_APPS}
      {...props}
      _style={extendStyle(FUNCTION_APPS, props)}
    />
  )
}
