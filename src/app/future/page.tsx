import { Box, Card, Link } from "@mui/material";

function Future() {
  return (
    <Box
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: 800,
          width: "100%",
        }}
        style={{
          textAlign: "left",
          display: "column",
          justifyItems: "left",
          justifyContent: "left",
        }}
      >
        <div style={{ margin: "10px" }}>
          <h2 style={{ marginTop: "15px" }}>The Future of Bozja.net</h2>
          <p>
            Hello everyone,
            <br />
            <br />
            This is Celliera Tsukemeownya, the creator of bozja.net. I&apos;d like to
            preface this by saying this is not a negative announcement,
            bozja.net is not going away.
            <br />
            <br />
            However, with 7.X introducing a new Field Operation I&apos;ve decided to
            pretty much start from scratch and make a new site. You can visit
            this site today at{" "}
            <Link href="https://xivfo.com/">https://xivfo.com/</Link>. This site
            is currently in extremely early alpha but I am looking at eventually
            acting as a replacement to the current bozja.net.
            <br />
            <br />
            So why replace bozja.net?
            <br />
            As much as I love this site, it was never designed for more than
            maybe 3 pages as it used to be a single page react app. Most of this
            is a styling issue that can be fixed but still would have required a
            significant code rewrite. As many people who I talk to know,
            bozja.net has far more pages than most people realize as I do not
            reasonably have the UI space to include them.
            <br />
            On top of this, bozja.net was first and foremost supposed to just be
            a link aggregator site and was originally just the guides page and
            the FAQ. It was never designed with actually hosting guides in mind.
            <br />
            Additionally, I host bozja.net entirely out of my own pocket. Keeping
            2 versions of effectively the same content up at the same time is a
            bit too costly for me to want to do on my end.
            <br />
            <br />
            So what is the plan with the new site?
            <br />
            To start out it will just copy and paste most of bozja.net&apos;s current
            functionality and bozja.net will remain up in its current state.
            Once the bozja section is fully functional I will likely move the
            bozja.net and bozja.guide urls over to xivfo and shut down the
            existing bozja.net servers.
            <br />
            The main long term goal of the new site is to allow the hosting of
            guides themselves and the creation of more useful tools. I know on
            my end I&apos;ve wanted to make a proper full end to end bozja guide as
            well as a loadout generator and this new site will allow me to
            easily add those pages.
            <br />
            <br />
            One last note before I end this.{" "}
            <b>THANK YOU SO MUCH TO EVERYONE WHO HAS MADE GUIDES FOR BOZJA! </b>
            Bozja.net could never have existed without you all. Additionally,
            thank you to everyone who has used and spread the word about
            bozja.net.
            <br />
            <br />
            I look forward to making more guides and tools for everyone going
            forward.
            <br />
            <br />
            Thank you,
            <br />
            Celliera Tsukemeownya
          </p>
        </div>
      </Card>
    </Box>
  );
}

export default Future;
