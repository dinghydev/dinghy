import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_SHELL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Cloud_Shell.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 47.199999999999996,
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
