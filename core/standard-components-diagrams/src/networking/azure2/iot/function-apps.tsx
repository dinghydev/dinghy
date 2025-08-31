import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FUNCTION_APPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Function_Apps.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 60,
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
