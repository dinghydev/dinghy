import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FUNCTION_APPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Function_Apps.svg;',
  _width: 68,
  _height: 60,
}

export function FunctionApps(props: DiagramNodeProps) {
  return <Shape {...FUNCTION_APPS} {...props} />
}
