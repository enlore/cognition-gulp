# Cognition Starter Pack
## Pro Edition

Cause we're professionals.

It's supposed to intelligently(ish) watch your src tree and rerender on changes.

## Gotchas

This is an app skeleton that is geared toward quick and easy startup for a new single
app built on Cognition.

Download, unpack, install, and run it and you'll end up with some compiled files in the
`dist` dir that will be served on a local port.

Given that this runs on the backs of a bunch of nodejs file watchers
(orchestrated by gulp), you should be aware of the fact that the watchers will
occasionally hiccup and miss file changes.

If you make a change to your source and you don't see it reflected in the app in the
browser, kill and restart gulp to ensure that your changes get picked up.  Then, of
course, double check your work.

## Use It

    npm install
    gulp

Now gulp is watching your source dir for changes and serving your SPA at [localhost:3000](http://localhost:3000).

Hack on the stuff in `src`, watch gulp do its thing, watch your beautiful new baby grow.

## Optionally

Pass things via env vars:

    PORT=4000 gulp

Now gulp is serving your project at [localhost:4000](http://localhost:4000). UH mazing.
