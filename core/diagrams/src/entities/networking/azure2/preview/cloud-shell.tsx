import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_SHELL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Azure_Cloud_Shell.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 48,
}

export function CloudShell(props: NodeProps) {
  return (
    <Shape
      {...CLOUD_SHELL}
      {...props}
      _style={extendStyle(CLOUD_SHELL, props)}
    />
  )
}
