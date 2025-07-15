import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FUNCTION_APPS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Functions.svg;',
  _width: 50,
  _height: 46,
}

export function FunctionApps(props: DiagramNodeProps) {
  return <Shape {...FUNCTION_APPS} {...props} />
}
