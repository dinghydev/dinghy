import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BITBUCKET = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Bitbucket_Logo.svg;strokeColor=none;',
  },
  _original_width: 57,
  _original_height: 50,
}

export function Bitbucket(props: DiagramNodeProps) {
  return (
    <Shape {...BITBUCKET} {...props} _style={extendStyle(BITBUCKET, props)} />
  )
}
