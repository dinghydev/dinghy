import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLIENT_APPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Client_Apps.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ClientApps(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLIENT_APPS}
      {...props}
      _style={extendStyle(CLIENT_APPS, props)}
    />
  )
}
