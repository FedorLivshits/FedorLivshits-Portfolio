import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'

const FadeInWhenVisible = ({children}) => {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        } else {
            controls.stop('visible')
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                visible: {x: 0, opacity: 1},
                hidden: {x: 300, opacity: 0}
            }}
        >
            {children}
        </motion.div>
    )
}
export default FadeInWhenVisible