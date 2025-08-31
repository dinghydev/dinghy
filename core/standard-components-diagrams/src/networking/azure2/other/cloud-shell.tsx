import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SHELL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Cloud_Shell.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 47.199999999999996,
}

export function CloudShell(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SHELL}
      {...props}
      _style={extendStyle(CLOUD_SHELL, props)}
    />
  )
}
